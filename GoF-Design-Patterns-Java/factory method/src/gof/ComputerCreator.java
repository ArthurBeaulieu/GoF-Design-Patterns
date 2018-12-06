package gof;

public class ComputerCreator extends AbstractComputerFactory {

	@Override
	protected String makeBox() {
		return "boitier de portable";
	}

	@Override
	protected String makeKeyboard() {
		return "clavier intégré";
	}

	@Override
	protected String makeScreen() {
		return "moniteur 11\"";
	}

	@Override
	protected String makeBoard() {
		return "petite carte mère";
	}

}
