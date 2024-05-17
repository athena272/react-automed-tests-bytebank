import { render, screen } from "@testing-library/react";
import Cabecalho from "./index.jsx";
import { userNameFromBack } from "./index.jsx";

test('Deve renderizar o nome do usuário logado', () => {
    render(<Cabecalho />);
    const testingUserName = screen.getByText(userNameFromBack);
    expect(testingUserName).toBeInTheDocument();
});