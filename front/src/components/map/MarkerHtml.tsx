export const markerHtml = (name: string, tag: string[]) => {
  return `
            <div 
                className="marker-container"
                style="background-color:white; 
                height : 130px; 
                width : 100px;
                border-radius : 10px;
                padding : 10px 0;
                border:1px solid black;"
                >
                <div 
                    className="img-container"
                    style="margin : auto; 
                    background-color:lightgray; 
                    width : 70%; 
                    height : 50%;"
                >
                </div>
                <h4 style="margin : 5px;">${name}</h4>
                <p className="tag-container"
                    style="font-size: 12px; margin : 5px;">카테고리
                    <span style="color: cadetblue;">#${tag[0]}</span>
                    <span style="color: seagreen;">#${tag[1]}</span>
                </p>
            </div>
        `;
};
