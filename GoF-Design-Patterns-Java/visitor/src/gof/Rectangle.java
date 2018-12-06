package gof;

public class Rectangle implements Forme
{
	private int largeur, longueur;
	
	public Rectangle(int largeur, int longueur)
	{
		this.largeur = largeur;
		this.longueur = longueur;
	}

	public double doOperation(Operation op)
	{
		return op.calculer(this);
	}

	public int getLargeur() {
		return largeur;
	}

	public void setLargeur(int largeur) {
		this.largeur = largeur;
	}

	public int getLongueur() {
		return longueur;
	}

	public void setLongueur(int longueur) {
		this.longueur = longueur;
	}

}
