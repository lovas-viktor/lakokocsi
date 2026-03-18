# MEMORY

## 2026-03-16
- Projekt indítása: Kecskeméti lakókocsi bérlés.
- Választott típus: Maxi N126NTL (Niewiadów).
  - Össztömeg: 750 kg.
  - Felszereltség: Kétszemélyes, konyhával, zuhanyzóval/WC-vel (NTL verzió).
- Vontató jármű: Opel Astra G 1.4 (2005), 66 kW (O.1: 850 kg).
- Piaci helyzet: Piaci rés a kisméretű lakókocsiknál Kecskeméten.
- Alternatívák: QEK Aero (retro, könnyű), Bastei 351 (olcsóbb, tágas).
- Kockázatkezelés: Bérbeadói Casco, GPS nyomkövető, Vonófejzár, Kaució (150k Ft).
- Kereskedelmi kutatás: Lengyelország a legolcsóbb külföldi forrás (PL: ~4.5M Ft új), Németország drágább. Új járműnél +27% ÁFA kockázat.
- Dokumentáció: Elkészült a [rental_policy.md](file:///home/viktor/.gemini/antigravity/brain/d37b13a7-960d-48d9-b007-e5ae60724a3a/rental_policy.md) és az [implementation_plan.md](file:///home/viktor/.gemini/antigravity/brain/d37b13a7-960d-48d9-b007-e5ae60724a3a/implementation_plan.md) frissítése.
- Weboldal: Végső finomítás (lakokocsi-kecskemet.hu).
  - Lead capture: Email küldése a viktor.lovas@gmail.com címre foglalás kérésekor (Formspree javasolt).
  - Design: Fehér hátteres hero, lightbox az összes képhez, áprilistól foglalt naptár (csak gombra).
  - Tartalom: Szezonális árak, bérlési folyamat, marketing szövegek elrejtése.
- Weboldal (2026-03-16 21:05): „Bérlés menete” szekció javítva.
  - Hiba: CSS osztályok (.process-grid) és HTML osztályok (.steps-grid) eltérése.
  - Megoldás: CSS frissítése .steps-grid-re, összekötő vonalak (.step-card::after) és maszkolás (box-shadow a .step-num-on).
  - Reszponzivitás: Mobil nézetben összekötő vonalak rejtve, függőleges stack.
