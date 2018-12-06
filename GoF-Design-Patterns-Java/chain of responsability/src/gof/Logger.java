package gof;

public abstract class Logger {
	public interface LEVEL{
		public static int ERR=0;
		public static int INFO=1;
		public static int DEBUG=2;
	}
	
	private int level;
	private Logger next;
	
	public Logger(int level){
		this.level = level;
	}
	
	public Logger setNext(Logger logger){
		this.next = logger;
		return next;
	}
	
	public Logger getNext(){
		return next;
	}
	
	public void log(int level,String message){
		if(level<=this.level){
			write(message);
		}
		if(next!=null)
			next.log(level, message);
	}
	
	public abstract void write(String message);
	
}
