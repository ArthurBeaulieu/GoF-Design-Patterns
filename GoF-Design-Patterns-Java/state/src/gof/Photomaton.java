package gof;

public class Photomaton {

	private AttentePiece etatAttentePiece = new AttentePiece(this);
	private AttenteChoix etatAttenteChoix = new AttenteChoix(this);
	private EtatDeveloppement etatDeveloppement = new EtatDeveloppement(this);
	private HorsService etatHorsService = new HorsService(this);
	
	private EtatPhotomaton etatCourant = etatAttentePiece;

	
	public AttentePiece getEtatAttentePiece() {
		return etatAttentePiece;
	}
	public AttenteChoix getEtatAttenteChoix() {
		return etatAttenteChoix;
	}
	public EtatDeveloppement getEtatDeveloppement() {
		return etatDeveloppement;
	}
	public HorsService getEtatHorsService() {
		return etatHorsService;
	}
	public EtatPhotomaton getEtatCourant() {
		return etatCourant;
	}
	public void setEtatCourant(EtatPhotomaton etatCourant) {
		this.etatCourant = etatCourant;
	}
	public void modeIdentite() {
		etatCourant.modeIdentite();
		
	}
	public void insererPiece() {
		etatCourant.insererPiece();
		
	}
}
