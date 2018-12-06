package gof;

public class SmsLogger extends Logger {

	public SmsLogger(int level) {
		super(level);
	}

	@Override
	public void write(String message) {
		System.out.println(">>> SmsLogger : "+message);

	}

}
