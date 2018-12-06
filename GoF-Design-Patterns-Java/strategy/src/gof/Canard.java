package gof;

public class Canard {
	private VolStrategy volStrategy = new VolNormal();
	
	public void setVolStategy(VolStrategy volStrategy) {
		this.volStrategy = volStrategy;
	}
	
	public void voler() {
		volStrategy.voler();
	}
}
