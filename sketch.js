let rowcol = 6;

function setup() {
  createCanvas(windowWidth, windowHeight);
  //noLoop();
}

function draw() {
  background("#00008b");
  stroke("goldenrod");
  strokeWeight(1);
  renderDesign(rowcol,rowcol)
}


function grid(rows, cols){
  for(let i = width/cols; i < width; i += width/cols){
    line(i, 0, i, height);
  }
  for(let i = height/rows; i < height; i+= height/rows){
    line(0,i, width, i);
  }
}

function renderDesign(rows,cols){
  let cellW = width/cols;
  let cellH = height/rows;
  for(let i = 0; i < width; i+= cellW){
    for (let j = 0; j < height; j += cellH){
      let lineFocalPtX;// = mouseX/rowcol + i;
      let lineFocalPtY;//  =  mouseY/rowcol + j;
      let maxX = cellW + i;
      let maxY = cellH + j;
      let minX = i;
      let minY = j;
      
      if (minX < mouseX && mouseX < maxX && minY < mouseY && mouseY < maxY){
        lineFocalPtX = mouseX;
        lineFocalPtY = mouseY;
      }
      else if(minX < mouseX && mouseX < maxX){
        // same col
        lineFocalPtX = mouseX;
        lineFocalPtY = mouseY < minY ? minY : maxY;
      }
      else if(minY < mouseY && mouseY < maxY){
        // same col
        lineFocalPtY = mouseY;
        lineFocalPtX = mouseX < minX ? minX : maxX;
      }
      else{
        if (maxX <= mouseX && maxY <= mouseY)
        {
          lineFocalPtX = maxX;
          lineFocalPtY = maxY;
        }
        else if(maxX <= mouseX)
        {
          lineFocalPtX = maxX;
          lineFocalPtY = minY;
        }
        else if(maxY <= mouseY)
        {
          lineFocalPtX = minX;
          lineFocalPtY = maxY;
        }
        else
        {
          lineFocalPtX = minX;
          lineFocalPtY = minY;       
        }
      }
      

      
      for (let k = minX; k < maxX; k += (maxX-minX)/8)
      {
        line(lineFocalPtX, lineFocalPtY,k, minY);
        line(lineFocalPtX, lineFocalPtY,k, maxY);
      }
      for (let k = minY; k < maxY; k += (maxX-minX)/8)
      {
        line(lineFocalPtX, lineFocalPtY,minX,k);
        line(lineFocalPtX, lineFocalPtY,maxX,k);
      }
      
    }
  }
}
