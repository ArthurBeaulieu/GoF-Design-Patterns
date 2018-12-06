package gof;

public class Cercle implements Forme
{
	private double rayon;
	public Cercle(int rayon)
	{
		this.rayon = rayon;
	}
	public double doOperation(Operation op)
	{
		return op.calculer(this);
	}
	public double getRayon() {
		return rayon;
	}
	public void setRayon(double rayon) {
		this.rayon = rayon;
	}

}
