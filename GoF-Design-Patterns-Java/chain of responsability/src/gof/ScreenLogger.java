package gof;

public class ScreenLogger extends Logger {

	public ScreenLogger(int level) {
		super(level);
	}

	@Override
	public void write(String message) {
		System.out.println(">>> ScreenLogger : "+message);

	}

}
