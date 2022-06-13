import styled from 'styled-components';

export const CardWrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 24px;
    `

export const CardContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 17px 14px 15px 14px;
    height: 143px;
    margin-bottom: 0.9%;
    border: 1px solid #DADADA;
    
    &:hover {
        border: 1px solid black;
        transition : border 1.5s;
    }


    @media (min-width: 1000px) {
        width: calc(100% / 4 - 0.9% * 3 / 4);
        &:not(:nth-child(4n)) {
            margin-right: 0.9%;
        }
    }

    @media (min-width: 768px) and (max-width: 1000px) {
        width: calc(100% / 3 - 0.9% * 2 / 3);

        &:not(:nth-child(3n)) {
            margin-right: 0.9%;
	    }
    }

    @media (min-width: 480px) and (max-width: 768px) {
        width: calc(100% / 2 - 0.9% * 1 / 2);
        &:not(:nth-child(2n)) {
            margin-right: 0.9%;
        }
    }

    @media (max-width: 480px) {
		width: 100%;
    }
`

export const CardContainer3col = styled.div `
    display: flex;
    flex-direction: column;
    padding: 17px 14px 15px 14px;
    margin-bottom: 0.9%;
    border: 1px solid #DADADA;
   
    div {
        &:first-letter {
                text-transform: uppercase;
        }
    }
    

    
    &:hover {
        border: 1px solid black;
        transition : border 1.5s;
    }

    @media (min-width: 768px)  {
        width: calc(100% / 3 - 0.9% * 2 / 3);
        &:not(:nth-child(3n)) {
            margin-right: 0.9%;
	    }
    }

    @media (min-width: 480px) and (max-width: 768px) {
        width: calc(100% / 2 - 0.9% * 1 / 2);
        &:not(:nth-child(2n)) {
            margin-right: 0.9%;
        }
    }

    @media (max-width: 480px) {
		width: 100%;
    }
`