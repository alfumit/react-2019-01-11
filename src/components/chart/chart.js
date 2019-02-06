import React, {Component} from 'react'

class Chart extends Component {
    render() {
        return (
            <div ref = {this.setContainerRef}/>
        )
    }
    setContainerRef = (ref) => {
         this.constainer = ref
    }
    componentDidUpdate() {
        //$(this.container)
    }
}

export default Chart
