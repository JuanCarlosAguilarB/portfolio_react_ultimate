import React from 'react'


import img0 from "../../../../assets/images/technologies/0.png";
import img1 from "../../../../assets/images/technologies/1.png";
import img2 from "../../../../assets/images/technologies/2.png";
import img3 from "../../../../assets/images/technologies/3.png";
import img4 from "../../../../assets/images/technologies/4.png";
import img5 from "../../../../assets/images/technologies/5.png";
import img6 from "../../../../assets/images/technologies/6.jpeg";
import img7 from "../../../../assets/images/technologies/7.png";
import img8 from "../../../../assets/images/technologies/8.png";
import img9 from "../../../../assets/images/technologies/9.png";
import img10 from "../../../../assets/images/technologies/10.png";
import img11 from "../../../../assets/images/technologies/11.png";
import img12 from "../../../../assets/images/technologies/12.png";




const Knowledge = () => {
    return (
        <section className="knowledges">

            <h3 className="h3 knowledges-title">Knowledges</h3>

            <ul className="knowledges-list has-scrollbar">

                <li className="knowledges-item">
                    <img src={img0} alt="client logo" height="90"/>
                </li>

                <li >
                    <img src={img1} alt="client logo" height="90" width="140" />
                </li>

                <li className="knowledges-item">
                    <img src={img2} alt="client logo" width="90"height="90" />
                </li>
                <li className="knowledges-item">
                    <img src={img3} alt="client logo" width="90"height="90"/>
                </li>
                <li className="knowledges-item">
                    <img src={img4} alt="client logo" width="90"height="90"/>
                </li>
                <li className="knowledges-item">
                    <img src={img5} alt="client logo" width="90"height="90"/>
                </li>
                <li className="knowledges-item">
                    <img src={img6} alt="client logo" width="90" height="90"/>
                </li>
                <li className="knowledges-item">
                    <img src={img7} alt="client logo" width="90"height="90"/>
                </li>
                <li className="knowledges-item">
                    <img src={img8} alt="client logo" width="90"height="90"/>
                </li>
                <li className="knowledges-item">
                    <img src={img9} alt="client logo" width="90"height="90"/>
                </li>
                <li className="knowledges-item">
                    <img src={img10} alt="client logo" width="90"height="90"/>
                </li>
                <li className="knowledges-item">
                    <img src={img11} alt="client logo" width="90"height="90"/>
                </li>
                <li className="knowledges-item">
                    <img src={img12} alt="client logo" width="90"height="90"/>
                </li>
        
            </ul>

        </section>
    )
}

export default Knowledge;
