export const markerHtml = (name: string, category: string, tag: string[]) => {
  // parameter로 이미지 src 받기
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
                <div 
                    style="
                        align-items : center; 
                        display : flex; 
                        justify-content : center;
                        height : 33px; 
                    "
                >
                    <h5 
                        style="
                            margin : 3px;   
                            overflow: hidden;
                            text-overflow: ellipsis;
                            display: -webkit-box;
                            -webkit-line-clamp: 2;
                            -webkit-box-orient: vertical;
                            word-break: keep-all;
                        "
                    >${name}
                    </h5>
                </div>
                <p className="tag-container"
                    style="
                        font-size: 12px; 
                        margin : 5px; 
                        line-height:15px;
                    ">
                    ${category}
                    <span style="color: cadetblue;">#${tag[0]}</span>
                    <span style="color: seagreen;">#${tag[1]}</span>
                </p>
            </div>
        `;
};
