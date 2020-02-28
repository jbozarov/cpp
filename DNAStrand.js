function DNAStrand(dna){
	var arr = dna.split('')
  for (var i=0; i<dna.length; i++) {
		if (arr[i]==='A'){
			arr.splice(i, 1, 'T')
		}
		else if (arr[i]==='G'){
			arr.splice(i, 1, 'C')
		}
		else if (arr[i]==='C'){
			arr.splice(i, 1, 'G')
		}
		else if (arr[i]==='T'){
			arr.splice(i, 1, 'A')
		}
	}
	return arr; 
}

DNAStrand('ATTGC')
