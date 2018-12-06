package gof;

public abstract class AbstractComputerFactory {
	private String board;
	private String monitor;
	private String keyboard;
	private String box;
	
	public AbstractComputerFactory() {
		create();
	}
	
	public void create(){
		board = makeBoard();
		monitor = makeScreen();
		keyboard = makeKeyboard();
		box = makeBox();
	}

	protected abstract String makeBox();

	protected abstract String makeKeyboard();

	protected abstract String makeScreen();

	protected abstract String makeBoard();
	
	@Override
	public String toString(){
		StringBuffer buffer = new StringBuffer(box);
		buffer.append('\n').append(board).append('\n').append(keyboard).append('\n').append(monitor);
		return buffer.toString();
	}
	
}
