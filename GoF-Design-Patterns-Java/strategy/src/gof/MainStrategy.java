package gof;

public class MainStrategy {

	public static void main(String[] args) {
		Canard canard = new Canard();
		canard.voler();
		canard.setVolStategy(new VolRapide());
		canard.voler();

	}

}
