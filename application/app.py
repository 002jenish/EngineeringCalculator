from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        w1 = float(request.form['w1'])
        w2 = float(request.form['w2'])
        w3 = float(request.form['w3'])
        volume_wall = float(w1*w2 *w3)
        b1=float(request.form['b1'])
        b2=float(request.form['b2'])
        b3=float(request.form['b3'])
        volume_brick = float((b1+0.1)*(b2+0.1)*(b3+0.1))
        total_number_brick=int(volume_wall/volume_brick)+1
        return render_template('result.html', res=total_number_brick)
    return render_template('index.html')



if __name__ == '__main__':
    app.run(debug=True)
