package gof;

public class HorsService implements EtatPhotomaton {

	private Photomaton gp;
	
	public HorsService(Photomaton p)
	{
		gp=p;
	}
	public void modeIdentite() {
		System.out.println("HS");

	}


	public void modePortait() {
		System.out.println("HS");

	}


	public void recupererPiece() {
		System.out.println("HS");

	}


	public void insererPiece() {
		System.out.println("HS");

	}
	@Override
	public void recupererPhoto() {
		System.out.println("HS");
		
	}

}
