// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here http://rosalind.info/problems/list-view/ (source)

// DNAStrand ("ATTGC") # return "TAACG"

// DNAStrand ("GTAT") # return "CATA"

function DNAStrand(dna) {
  return dna.replace(/./g, function(Andres) {
    return DNAStrand.pairs[Andres]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

Test.assertEquals(DNAStrand("AAAA"),"TTTT","String AAAA is");
Test.assertEquals(DNAStrand("ATTGC"),"TAACG","String ATTGC is");
Test.assertEquals(DNAStrand("GTAT"),"CATA","String GTAT is");

Test.describe("Basic tests",function(){
  Test.assertEquals(DNAStrand("AAAA"),"TTTT","String AAAA is")
  Test.assertEquals(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
  Test.assertEquals(DNAStrand("GTAT"),"CATA","String GTAT is")
  Test.assertEquals(DNAStrand("AAGG"),"TTCC", "String AAGG is")
  Test.assertEquals(DNAStrand("CGCG"),"GCGC", "String CGCG is")
  Test.assertEquals(DNAStrand("ATTGC"),"TAACG","String ATTGC is")
  Test.assertEquals(DNAStrand("GTATCGATCGATCGATCGATTATATTTTCGACGAGATTTAAATATATATATATACGAGAGAATACAGATAGACAGATTA"),"CATAGCTAGCTAGCTAGCTAATATAAAAGCTGCTCTAAATTTATATATATATATGCTCTCTTATGTCTATCTGTCTAAT")
  })
  Test.describe("Random tests",function(){
  base=["A","C","G","T"];
  function randint(a,b){return Math.floor(Math.random()*(b-a+1)+a);}
  
  function DNASol(dna){
    res="";
    for (var nuc=0;nuc<dna.length;nuc++){
      if (dna[nuc]=="A") res+="T";
      else if (dna[nuc]=="T") res+="A";
      else if (dna[nuc]=="C") res+="G";
      else res+="C";
    }
    return res
  }
  
  for (var _=0;_<40;_++){
    testdna="";
    testlen=randint(5,30);
    for (var j=0;j<testlen;j++) testdna+=base[randint(0,3)]
    Test.it("Testing for "+testdna,function(){
    Test.assertEquals(DNAStrand(testdna),DNASol(testdna),"It should work for random inputs too");
    })
  }
  })