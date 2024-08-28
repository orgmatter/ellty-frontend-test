import React, {useState} from "react";

function ControlList(props) {

    const { controlObj, indexKey, isChecked } = props;

    return (
        <label className="content-cover-flex-row" htmlFor={`single-chkbox-${indexKey}`} key={indexKey}>
            <div className="content-cover-flex-item">
                <span className="text-sp">{controlObj.chkboxName}</span>
            </div>
            <div className="content-cover-flex-item">
                <input 
                    className="form-chkbox" 
                    id={`single-chkbox-${indexKey}`} 
                    type="checkbox" 
                    value={controlObj.chkboxVal}
                    checked={isChecked? isChecked : null}
                />
                <span className="chkbox-mark">
                    <svg viewBox="0 0 24 24">
                        <path d="M9 16.2l-3.5-3.5L4 14.3l5 5L20 8.3l-1.4-1.4z"/>
                    </svg>
                </span>
            </div>
        </label>
    )
}

export default function FormControls() {

    const [isChecked, setIsChecked] = useState(false)

    const controlListArr = [
        {
            chkboxName: "Page 1",
            chkboxVal: "page 1"
        },
        {
            chkboxName: "Page 2",
            chkboxVal: "page 2"
        },
        {
            chkboxName: "Page 3",
            chkboxVal: "page 3"
        },
        {
            chkboxName: "Page 4",
            chkboxVal: "page 4"
        }
    ]

    const handleAllCheckBoxChange = () => {
        setIsChecked(prev => !prev)
    }
    
    return (
        <div className="form-control-component-flex">
            <div className="form-control-component-item">
                <div className="form-control-cover-flex">
                    <div className="form-control-cover-item">
                        <label className="header-cover-flex" htmlFor="all-chkbox">
                            <div className="header-cover-item">
                                <span className="text-sp">All pages</span>
                            </div>
                            <div className="header-cover-item">
                                <input 
                                    className="form-chkbox" 
                                    id="all-chkbox" 
                                    type="checkbox"
                                    onChange={handleAllCheckBoxChange}
                                />
                                <span className="chkbox-mark">
                                    <svg viewBox="0 0 24 24">
                                        <path d="M9 16.2l-3.5-3.5L4 14.3l5 5L20 8.3l-1.4-1.4z"/>
                                    </svg>
                                </span>
                            </div>
                        </label>
                        <div className="content-cover-flex-col">
                            {
                                controlListArr.map((controlObj, index) => {
                                    return (<ControlList 
                                                indexKey={index} 
                                                controlObj={controlObj}
                                                isChecked={isChecked}
                                            />)
                                })
                            }
                        </div>
                        <div className="footer-cover-flex">
                            <div className="footer-cover-item">
                                <button className="form-btn" type="button">Done</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}