import React, {Component} from "react";
import styled from "styled-components";
import Paragraph from "./Typography/Paragraph"

const SliderWrapper = styled.div`
    .slider {
        &__container {
            position: relative;
            min-height: 160px;
        }

        &__item {
            width: 100%;
            text-align: center;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            background: #FFF;
            opacity: 0;
            transition: 150ms opacity ease-in;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;

            &.active {
                opacity: 1;
            }
        }

        &__author {
            font-weight: bold;
            color: var(--text-color);
        }

        &__citation {
            font-size: 1.4em;
            font-style: italic;
            font-weight: normal;
            color: #666;
            margin-bottom: 16px;
        }

        &__pagination {
            text-align: center;

            button {
                border: 0;
                background: #FFF;
                display: inline-block;
                border-radius: 50%;
                width: 15px;
                height: 15px;
                margin-left: 8px;
                border: 2px solid var(--blue);
                cursor: pointer;
                outline: none;

                &.active {
                    background: var(--blue);
                }
            }
        }
    }
    
`

export default class Testimonials extends Component {
    state = {
        currentSlide: 0
    }

    changeSlide = (key) => {
        console.log(key)
        this.setState({
            currentSlide: key
        })
    }
    
    render () {
        const {children} = this.props;

        return (
            <SliderWrapper>
                <div className="slider__container">
                    {children.map((item, key) => 
                        <div 
                            key={key}
                            className={"slider__item" + (this.state.currentSlide === key ? " active" : "")}
                        >
                            <Paragraph className="slider__citation">{item.props.children}</Paragraph>
                            <Paragraph className="slider__author">{item.props.author}</Paragraph>
                        </div>
                    )}
        
                </div>
                
                <div className="slider__pagination">
                    {children.map((item, key) => 
                        <button key={key} onClick={() => this.changeSlide(key)} className={this.state.currentSlide === key ? " active" : ""}></button>
                    )}
                </div>
            </SliderWrapper>
        )
    }
}
