import React from 'react';
import { Progress, Button } from 'antd';
const ButtonGroup = Button.Group;


class myProgress extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            percent: 0
        }
    }

    increase() {
        let percent = this.state.percent + 10;
        if (percent > 100) {
            percent = 100;
        }
        this.setState({ percent });
    }

    decline() {
        let percent = this.state.percent - 10;
        if (percent < 0) {
            percent = 0;
        }
        this.setState({ percent });
    }

    render() {
        return (
            <div className="progress-wrap">
                <Progress percent={this.state.percent} />
                <Progress type="circle" percent={this.state.percent} />
                <ButtonGroup>
                    <Button type="ghost" onClick={this.decline.bind(this)} icon="minus" />
                    <Button type="ghost" onClick={this.increase.bind(this)} icon="plus" />
                </ButtonGroup>
                <span>点击按钮可以看到进度条的变化</span>

                <Progress percent={30} />
                <Progress percent={50} status="active" />
                <Progress percent={70} status="exception" />
                <Progress percent={100} />
                <Progress percent={50} showInfo={false} />
                <Progress type="circle" percent={75} />
                <Progress type="circle" percent={70} status="exception" />
                <Progress type="circle" percent={100} />
            </div>
        )
    }
}

export default myProgress;
