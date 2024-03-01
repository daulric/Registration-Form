import "./card.css"

import React, {Component} from "react";

function CreateInfo(props) {
    return (
        <div class="details-info">
            <p><b>{props.info}:</b> {props.tag}</p>
        </div>
    )
}

class MyCard extends Component {
    constructor(props) {
        super(props)
        this.info = JSON.parse(window.localStorage.getItem("Items"));
    }

    render() {
        return (
            <div class="container">
                <div class="padding">
                    <div class="font">
                        <div class="top">
                            <img class="pfp" alt="Image" src="https://www.tamcc.edu.gd/images/ta-logo.png" />
                        </div>
                        <div class="bottom">
                            <p class="user-name" >{this.info.Name} {this.info.Surname}</p>
                            <p class="desi">Student - {this.info.Programme}</p>
                            <div class="barcode">
                                <img alt="Image" src={"https://quickchart.io/qr?text=" + this.info.Email} />
                            </div>
                            <br />
                        </div>
                    </div>
                </div>

                <div class="back">
                    <h1 class="Details">Student Information</h1>
                    <CreateInfo info="Email" tag={this.info.Email} />
                    <CreateInfo info="Name" tag={this.info.Name + " " + this.info.Surname} />
                    <CreateInfo info="Programme" tag={this.info.Programme} />

                </div>
            </div>
        )
    }
}

export default MyCard;