def brick_calculation(w_length,w_width,w_thick,b_length,b_width,b_thick,bg):
    
    wall_volume=w_length*w_width*(w_thick*0.01)

    brick_volume=((b_length*0.01)+0.01) * ((b_width*0.01)+0.01) * ((b_thick*0.01)+0.01)
    
    no_of_brick=int(wall_volume/brick_volume)
    
    brick_volume_withoutMortar=(b_length*0.01)*(b_width*0.01)*(b_thick*0.01)
    
    orignal_volume=wall_volume-(no_of_brick*brick_volume_withoutMortar)
    orignal_volume_withWastage=orignal_volume+(orignal_volume*0.15)
    
    dry_volume_wastage=orignal_volume_withWastage+(orignal_volume_withWastage*0.25)

    cement_ratio=0
    sand_ratio=0

    if bg==1:
        cement_ratio=dry_volume_wastage/4
        sand_ratio=(dry_volume_wastage*3)/4

    elif bg==2:
        cement_ratio=dry_volume_wastage/5
        sand_ratio=(dry_volume_wastage*4)/5

    elif bg==3:
        cement_ratio=dry_volume_wastage/6
        sand_ratio=(dry_volume_wastage*5)/6
    
    elif bg==4:
        cement_ratio=dry_volume_wastage/7
        sand_ratio=(dry_volume_wastage*6)/7
    
    elif bg==5:
        cement_ratio=dry_volume_wastage/8
        sand_ratio=(dry_volume_wastage*7)/8
    
    elif bg==6:
        cement_ratio=dry_volume_wastage/9
        sand_ratio=(dry_volume_wastage*8)/9
    
    else :
        cement_ratio=dry_volume_wastage/10
        sand_ratio=(dry_volume_wastage*9)/10

    cement_ratio = cement_ratio/0.035
    sand_ratio = round(sand_ratio*1500*0.001,2)
    cement_ratio=int(cement_ratio+1)

    return no_of_brick,cement_ratio,sand_ratio