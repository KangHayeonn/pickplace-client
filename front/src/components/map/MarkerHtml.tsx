import { GetCategoryImage } from '../common/GetCategoryImage';

export const markerHtml = (name: string, category?: string, tag?: string[]) => {
  const img = GetCategoryImage(category ? category : '호텔·리조트');

  return `
            <div 
                className="marker-container"
                style="
                    background-color:white;
                    max-height : 135px; 
                    width : 100px;
                    border-radius : 10px;
                    padding : 12px 0;
                    border:1px solid lightgray;
                "
            >
                <div 
                    className="map-img-container"
                    style="
                        display : flex;
                        justify-content : center;
                        align-items : center;
                        width : 70px; 
                        height : 70px;
                        overflow : hidden;
                        margin :auto;
                        position : relative;
                    "
                >   
                    <img src="${img}" 
                        style="
                            position: absolute;
                            transform: translate(50, 50);
                            width: 100%;
                            height: 100%;
                            object-fit: cover;
                            margin: auto;
                        "
                    /> 
                </div>
                <div 
                    style="
                        max-height : 33px; 
                    "
                >
                    <h5 
                        style="
                            margin : 5px 3px;   
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
                        max-height : 35px;
                        font-size: 12px; 
                        margin : 5px; 
                        line-height:15px;
                    ">
                    ${category ? category : '호텔·리조트'}
                    <span style="color: cadetblue;">#${
                      tag ? tag[0] : '연인추천'
                    }</span>
                    <span style="color: seagreen;">#${
                      tag ? tag[1] : '친구추천'
                    }</span>
                </p>
            </div>
        `;
};
