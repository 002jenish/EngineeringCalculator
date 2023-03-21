from flask import Flask, render_template, request
import pymysql
from brickCalculation import brick_calculation

app = Flask(__name__)

#DBconnection details
host='localhost'
username='root'
password='root'
scema='calculator'

def data_for_dropdown():
        #database connection
    conn = pymysql.connect(host='localhost', user='root', password='root', database='calculator')
    cursor = conn.cursor()

    # Get all subjects from the 'masterTable' table
    cursor.execute("SELECT EngineeringID,EngineeringName,EngineeringIcon FROM masterTable")
    data = cursor.fetchall()

    # Close database connection
    cursor.close()
    conn.close()

    return data


@app.route('/')
def index():
    master_rows=data_for_dropdown()
    return render_template("index.html",masters=master_rows)

@app.route('/calculatorList')
def calculatorList():
    # Get the subject ID from the request parameter
    E_id = request.args.get('E_id')

    # Connect to database
    conn = pymysql.connect(host='localhost', user='root', password='root', database='calculator')
    cursor = conn.cursor()

    # Get all students for the selected subject from the 'students' table
    cursor.execute("SELECT CalculatorName,CalculatorDiscription,url FROM subTable WHERE Sequence = %s", E_id)
    sub_rows = cursor.fetchall()

    master_rows=data_for_dropdown()

    # Close database connection
    cursor.close()
    conn.close()

    return render_template("calculatorList.html",subs=sub_rows,master_rows=master_rows)

@app.route('/about')
def about():
    master_rows=data_for_dropdown()
    return render_template("about.html",master_rows=master_rows)

@app.route('/contact')
def contact():
    master_rows=data_for_dropdown()
    return render_template("contact.html",master_rows=master_rows)

@app.route('/brick_calculator', methods=['GET', 'POST'])
def brick():
    if request.method=='POST' : 
        
        w_length=float(request.form['w_length'])
        w_width=float(request.form['w_width'])
        w_thick=float(request.form['w_thick'])

        # brick dimantion
        b_length=float(request.form['b_length'])
        b_width=float(request.form['b_width'])
        b_thick=float(request.form['b_height'])

        #print(type(b_length))

        # w_length=float(w_length)
        # w_width=float(w_width) 
        # w_thick=float(w_thick) 

        # b_length=float(b_length) 
        # b_width = float(b_width) 
        # b_thick = float(b_thick) 

        # feet_or_meter=request.form['convert']
        # if feet_or_meter :
        #     w_length = w_length * 0.3048
        #     w_width = w_width * 0.3048

        # if request.form['convertToFeet']:
        #     w_length = w_length * 0.3048
        #     w_width = w_width * 0.3048

        # else :
        #     w_length=w_length
        #     w_width=w_width

        if 'convertToFeet' in request.form :
            w_length = w_length * 0.3048
            w_width = w_width * 0.3048
        
        else:
            w_length=w_length
            w_width=w_width

        # ration select
        bg=request.form['bg']

        master_rows=data_for_dropdown()
        no_of_brick,cement_ratio,sand_ratio=brick_calculation(w_length,w_width,w_thick,b_length,b_width,b_thick,bg)
        return render_template("brick.html",master_rows=master_rows,no_of_brick=no_of_brick,cement_ratio=cement_ratio,sand_ratio=sand_ratio)
    return render_template("brick.html")

    # wall dimantion
    
@app.route('/plastering')
def plastering():
    return render_template("plastoring.html")

if __name__ == '__main__':
    app.run(debug=True)
