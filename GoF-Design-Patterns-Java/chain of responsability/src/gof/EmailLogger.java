package gof;

public class EmailLogger extends Logger {

	public EmailLogger(int level) {
		super(level);
	}

	@Override
	public void write(String message) {
		System.out.println(">>> EmailLogger : "+message);

	}

}
