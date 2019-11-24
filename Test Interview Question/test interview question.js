for(var i=0; i<10;i++){
	var line = '';
	for(var j=0; j<10;j++){
		if(i==0 || i==9 || j==0 || j==9 || j==i || j==(9-i)){
			line += '#';
		}else{
			line += ' ';
		}
	}
	console.log(line);
}

/*
##########
##      ##
# #    # #
#  #  #  #
#   ##   #
#   ##   #
#  #  #  #
# #    # #
##      ##
##########
*/