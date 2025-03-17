📌 Milestone 1: Recuperare e visualizzare i dati
Effettua una chiamata API a
https://boolean-spec-frontend.vercel.app/freetestapi/politicians
Salva la risposta in uno stato React (useState).
Mostra i politici in una lista di card, visualizzando almeno le seguenti proprietà:
Nome (name)
Immagine (image)
Posizione (position)
Breve biografia (biography)



📌 Milestone 2: Implementare la ricerca ottimizzata
Aggiungi un campo di ricerca (<input type="text">) sopra la lista dei politici.
Permetti all’utente di filtrare i risultati in base a nome o biografia (se il testo cercato è incluso). Suggerimento: Creare un array derivato filtrato, che viene aggiornato solo quando cambia la lista di politici o il valore della ricerca.
❌ Non usare useEffect per aggiornare l’array filtrato.



📌 Milestone 3: Ottimizzare il rendering delle card con React.memo
Attualmente, ogni volta che l’utente digita nella barra di ricerca, tutte le card vengono ri-renderizzate, anche quelle che non sono cambiate.
Usa React.memo() per evitare il ri-render delle card quando le loro props non cambiano.
Aggiungi un console.log() dentro il componente Card per verificare che venga renderizzato solo quando necessario.

