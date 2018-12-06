package gof;

public class TestObserver {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		Chaudiere c = new Chaudiere();
		SondeTemperature t = new SondeTemperature();
		
		t.inscrire(c);
		t.setTemperature(1);
		t.setTemperature(22);

	}

}
