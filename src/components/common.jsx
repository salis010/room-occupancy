import styled from '@emotion/styled'

export const PageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const H1 = styled.h1`
    font-size: 3rem;
    color: ${(props) => props.theme.colors.primary}
`

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    padding: 0 2rem;
    margin: 2rem 0;
    background-color: ${(props) => props.theme.colors.white};
    border-radius: ${(props) => props.theme.dimensions.borderRadius};
`

export const ContentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    `

export const RoomTypesWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: ${(props) => props.theme.dimensions.sectionChildWidth};
    margin-bottom: 2rem;
`

export const ResultsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: ${(props) => props.theme.dimensions.sectionChildWidth};
`

export const Label = styled.label`
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.darkGrey};
`

export const NumberInput = styled.input`
    font-size: 1.2rem;
    text-indent: 0.5rem;
    width: 15rem;
    color: ${(props) => props.theme.colors.text};
    border: 2px solid grey;
    border-radius: 4px;;
`

export const ButtonWrapper = styled.div`
    margin: 2rem;
`
export const Button = styled.button`
    width: 20rem;
    height: 3rem;
    font-size: 1.2rem;
    color: white;
    background-color: ${(props) => props.theme.colors.darkGrey};
    border-radius: ${(props) => props.theme.dimensions.borderRadius};
    border: none;
    outline: none;
    cursor: pointer;
`
