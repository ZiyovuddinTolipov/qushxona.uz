/* eslint-disable react/prop-types */
import React from 'react';
class Welcome extends React.Component {
    render() {
        return (
            <>
                <div className=" group relative cursor-pointer overflow-hidden  text-2xl uppercase leading-6 text-black">
                    <span className="inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]">
                        {this.props.text}
                    </span>
                    <span className="absolute left-0 inline-block translate-y-[120%] rotate-12 p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
                        {this.props.text}
                    </span>
                </div>
            </>
        )
    }
}
export default Welcome; 

