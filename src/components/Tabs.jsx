export default function Tabs({ children, buttons, ButtonsContainer = 'menu' }) {
    // const ButtonContainter = buttonsContainer;
    return (
    <>
        <ButtonsContainer>
            {buttons}
        </ButtonsContainer>
        {children}
    </>
    );
}