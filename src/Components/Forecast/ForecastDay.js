import React from 'react';
import { Collapse, Button, Table } from 'reactstrap';

class ForecastDay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false
        }
    }

    toggle = () => {
        this.setState({
            collapse: !this.state.collapse
        })
    }

    render() {
        return (
            <div className="Forecast-Wrapper">
                <thead >
                    <tr >
                        <th className="Forecast-Date" >{this.props.date}</th>
                    </tr>
                </thead>
                <Collapse isOpen={!this.state.collapse}>
                    <Table striped size="sm" className="Forecast-Detail">
                        <tbody >
                            {this.props.times.map((time) => {
                                return (
                                    <tr>
                                        <td className="w-25 align-middle">{time.time}</td>
                                        <td className="w-25 align-middle"><img src={time.icon} /></td>
                                        <td className="w-25 align-middle">{time.temp + ' ' + this.props.tempUnit}</td>
                                        <td className="w-25 align-middle">{time.description}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </ Table>
                </Collapse>
            </div>
        )
    }


}

export default ForecastDay;

