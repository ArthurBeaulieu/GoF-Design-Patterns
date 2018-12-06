package gof;

public class Imprimante {
	private static Imprimante instance;
	
	private Imprimante() {}
	
	public static synchronized Imprimante getInstance() {
		if(instance==null) {
			Imprimante.instance = new Imprimante();
		}
		return instance;
	}

}
