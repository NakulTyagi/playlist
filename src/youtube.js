import React, { Component } from "react";
import { Button } from "antd";
import { Input } from "antd";
import YouTube from 'react-youtube';
import './youtube.css';


class Youtube extends Component {
    state = { arr: ["https://www.youtube.com/watch?v=IKuoOTRO1eo"], count: 0, videoId: "IKuoOTRO1eo" };



    playlist = () => {
        var input = document.getElementById("ip").value;
        console.log(this.state.arr + this.state.count);

        this.state.arr[this.state.count] = input;

        var list = this.state.arr[this.state.count];
        var x = document.createElement('li');
        x.innerHTML = list
        document.getElementById('box').appendChild(x);
        var y = document.createElement('button');
        y.innerHTML = "Play";
        y.id = "play";
        y.onclick = () => this.play(input);
        y.type = "primary";
        document.getElementById('box').appendChild(y);
        this.state.count = this.state.count + 1;
    };

    delete = () => {
        for (var i = 0; i < this.state.arr.length - 1; i++) {
            this.state.arr[i] = this.state.arr[i + 1];
        }
        this.setState({ videoId: this.state.arr[0].slice(-11) })

        console.log("delete called" + this.state.videoId);
    };


    play = (input) => {

        for (var i = 0; i < input.length; i++) {
            if (input[i] == "=") {
                this.state.videoId = input.substring(i + 1, input.length)
                console.log(this.state.videoId);
            }
        }
        this.setState({ videoId: input.slice(-11) })




    };

    render() {
        const Search = Input.Search;
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1
            }
        };
        return (
            <div className="contain">
                <div className="header">
                    <h1>PLAYLIST</h1>
                    <div>
                        <Input id="ip" placeholder="Input the URL" />
                        <Button id="add" type="primary" onClick={() => this.playlist()}>Add</Button>

                    </div>
                    <div >
                        <ol id="box">

                        </ol>

                    </div>

                    <div id="video">
                        <YouTube id="you"
                            videoId={this.state.videoId}
                            opts={opts}
                            onReady={this._onReady, () => this.play(this.state.arr[0])}
                            onEnd={() => this.delete()}
                        />

                    </div>

                </div>
            </div>
        );
    }
}

export default Youtube;