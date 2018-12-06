package gof;

public class MainResponsability {


	public static void main(String[] args) {
		Logger logger = new ScreenLogger(Logger.LEVEL.ERR);
		Logger log2 = new EmailLogger(Logger.LEVEL.INFO);
		Logger log3 = new SmsLogger(Logger.LEVEL.DEBUG);
		
		logger.setNext(log2).setNext(log3);
		
		logger.log(Logger.LEVEL.DEBUG, "Message");
		
	}

}
