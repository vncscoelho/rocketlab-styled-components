import React from "react";
import styled from "styled-components";
import Button from "./Button"
import Heading from "./Typography/Heading"
import Paragraph from "./Typography/Paragraph"

const PriceTableWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 930px) {
        flex-wrap: wrap;
    }

    .price-table {
        &__item {
            background: var(--blue);
            padding: 16px 0;
            margin-left: 4px;
            flex-grow: 1;

            @media (max-width: 930px) {
                flex-wrap: wrap;
                flex-basis: 100%;
                margin-bottom: 24px;
                margin-left: 0;
            }
        }

        &__body {
            background: #FFF;
            padding: 8px 16px 16px 16px;
            margin-bottom: 16px;
        }

        &__price {
            color: #000;
            font-weight: bold;

            span {
                font-size: 3em;
                vertical-align: middle;
                display: inline-block;
            }

            small {
                font-size: 1.4em;
                display: inline-block;
                vertical-align: super;
                line-height: 2.8em;
            }
        }

        &__list {
            ul {
                list-style-type: none;

                li {
                    padding: 12px 0;
                    font-size: .9em;
                    border-top: 1px solid #c2c2c2;
                    color: #848484;

                    &:last-of-type {
                        padding-bottom: 0;
                    }
                }
            }
        }
    }
`

const PriceTable = ({ children, ...props }) => {
    return (
        <PriceTableWrapper {...props} className="price-table">
                {children.map((item, key) =>
                    {
                    const price = item.props.price.split(".");
                    return <div className="price-table__item" key={key}>
                        <Heading h={3} className="price-table__heading" color="#FFF">{item.props.title}</Heading>
                        <div className="price-table__body">
                            <Paragraph className="price-table__price">
                                <span>${price[0]}</span>
                                <small>{price[1]}</small>
                            </Paragraph>
                            <section className="price-table__list">
                                {item}
                            </section>
                        </div>
                        <Button>PURCHASE</Button>
                    </div>
                    }
                )}
        </PriceTableWrapper>
    )
}

export default PriceTable;
