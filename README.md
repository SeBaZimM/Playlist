# Playlist

# Testabläufe der Playlist anhand verschiedene Fällen

## Gegeben:
- Playlist mit 12 Elemente. Jedes element besitzt eine Wiederholungsfrequenz. 
- Anhand der Wiederholungsfrequenz wird die Wiederholung der Ausgabe der Liste bestimmt.

## Szenario 1: 
### Alle Elemente haben die selbe Wiederholungsfrequenz

### Fall 1:
#### Alle Elemente haben eine Wiederholungsfrequens von 0
- Erwartet	- 0 0 0 0 0 0 0 0 0 0 0 0
- Ist		- 0 0 0 0 0 0 0 0 0 0 0 0
- Ergebnis	- bestanden

### Fall 2:
#### Alle Elemente haben eine Wiederholungsfrequenz von 1
- Erwartet	- 1 1 1 1 1 1 1 1 1 1 1 1
- Ist		- 1 1 1 1 1 1 1 1 1 1 1 1
- Ergebnis	- bestanden

### Fall 3:
#### Alle Elemente haben eine Wiederholungsfrequens von 2
- Erwartet	- 2 2 2 2 2 2 2 2 2 2 2 2
- Ist		- undefined
- Ergebnis	- durchgefallen
	
### Fall 4:
#### Alle Elemente haben eine Wiederholungsfrequens von 3
- Erwartet	- 3 3 3 3 3 3 3 3 3 3 3 3
- Ist		- undefined
- Ergebnis	- durchgefallen

### Fall 5:
#### Alle Elemente haben eine Wiederholungsfrequens von 5
- Erwartet	- 5 5 5 5 5 5 5 5 5 5 5 5
- Ist		- undefined
- Ergebnis	- durchgefallen

### Fazit:
- Fall 1 und Fall 2 liefern das erwartende Ergebnis.
- Fall 3,4 und 5 ergeben rein aus der Logik wenig Sinn dies zu tun.
- Die Ergebnisse sind alle undefined und somit durchgefallen.
- Bei einer Playlist ohne explizite angaben einer Wiederholungsfrequenz (Standard 0 oder 1) hat dieses Szenario aus dieser Sicht ihr erwartetes Ergebnis zurückgeliefert.

## Szenario 2:
### Ein oder mehrere Elemente haben eine Wiederholungsfrequenz  > 1 aber mindestens ein Element hat eine Wiederholungsfrequent <= 1

### Fall 1
#### Ein / mehrere Element(e) hat/haben eine Wiederholungsfrequenz von 2
- Erwartet	- 2 0 2 0 2 0 2 0 2 0 2 0 2 0 2 0 2 0 2 0 2 0
- Ist		- 2 0 0 2 0 0 2 0 0 2 0 0 2 0 0 2 0
- Ergebnis	- durchgefallen

### Fall 2
#### Ein / mehrere Element(e) hat/haben eine Wiederholungsfrequenz von 3
- Erwartet	- 3 0 0 3 0 0 3 0 0 3 0 0 3 0 0 3 0
- Ist		- 3 0 0 0 3 0 0 0 3 0 0 0 3 0 0
- Ergebnis	- durchgefallen

### Fall 3
#### Ein / mehrere Element(e) hat/haben eine Wiederholungsfrequenz von 5
- Erwartet	- noch keine Erwartung
- Ist		- noch kein Ergebnis
- Ergebnis	- ausstehend

### Fazit:
- Es wird erwarten, dass anhand der Wiederholungsfrequenzen auch tasächlich die Reienfolge/ Ablauf der Playliste bestimmt wird.
- Bei den Erwartungen das dies eintrifft wird aber jeweils eine Stelle übersprungen.
- Bei Fall 1 ergibt jedes 3. Element / Bei Fall 2 ergibt jedes 4. Element
- Test von Fall 3 ist ausstehend und noch zu testen?
- Eventueller Konflikt mit Szenario 3 ?

## Szenario 3:
### Mindestens zwei Elemente haben eine Wiederholungsfrequenz > 1 aber != die selbe Wiederholungsfrequenz  
aber mindestens ein Element hat eine Wiederholungsfrequent < 2

### Fall 1
#### Ein / mehrere Element(e) hat/haben eine Wiederholungsfrequenz von 2
#### Ein / mehrere Element(e) hat/haben eine Wiederholungsfrequenz von 3
- Erwartet	- 2 3 0 0 2 0 3 0 2 0 0 2 3 0 0 2 0 3 0
- Ist		- 2 3 0 0 2 0 3 0 2 0 0 2 3 0 0 2 0 3 0 
- Ergebnis	- bestanden

### Fall 2
#### Ein / mehrere Element(e) hat/haben eine Wiederholungsfrequenz von 2
#### Ein / mehrere Element(e) hat/haben eine Wiederholungsfrequenz von 3
#### Ein / mehrere Element(e) hat/haben eine Wiederholungsfrequenz von 5
- Erwartet	- 2 3 5 0 0 2 0 3 0 2 0 5 0 2 3 0 0 2 0
- Ist		- 2 3 5 0 0 2 0 3 0 2 0 5 0 2 3 0 0 2 0
- Ergebnis	- bestanden  
