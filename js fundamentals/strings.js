 //String Method & Properties
 //Better comments used for colouring only uwu
 //--------------------------------------------------------------------------------------------------------------------------------------------------------------//

 //*String Length
 let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 console.log(`text length is: ${txt.length}`)

 //*Finding a String in a String -- indexOf, lastIndexOf

 txt = "Please locate where 'locate' occurs!";
 let pos = txt.indexOf("locate");               // --> finds first occurence
 let endpos = txt.lastIndexOf("locate");        // --> finds last occurence
 console.log(`first index is ${pos}`);          // --> returns -1 if text not found

 console.log(`second index using indexOf: ${txt.indexOf("locate", 15)}`) // --> indexOf can take in a second parameter, i.e. its search position

 //*Finding a String in a String -- search

 let str = "Please locate where 'locate' occurs!";
 pos = str.search("locate"); 
 console.log(`index found using search(): ${pos}`)

 //TODO search() returns indexes, which is the same as indexOf/lastIndexOf, but cannot take in a second parameter
 //TODO indexOf() cannot search for regular expressions. 

 //--------------------------------------------------------------------------------------------------------------------------------------------------------------//

 //*Extracting String Parts -- slice(start, end), substring(start, end), substr(start, length)

 //slice() --> takes in positive or negative integers. If negative, positions counted from end of the string.
 //slice() creates a new string, does not mutate original string. 
 str = "Apple, Banana, Kiwi";
 let res = str.slice(7, 13);
 console.log(`sliced: ${res}. original string: ${str}`)

 //substring() --> similar to slice(). Omiting second parameter for both will slice the rest of the string. 
 res = str.substring(7, 13);
 console.log(`substring: ${res}, original: ${str}`)

 //substr() --> similar to slice, except second parameter takes in **length** of the string
 res = str.substr(7,6)
 console.log(`substr: ${res}, original string: ${str}`)

 //--------------------------------------------------------------------------------------------------------------------------------------------------------------//

 //*Replacing String Content -- replace()
 //!replace() does not change string it is called on! It returns a new string
 str = "Please visit Microsoft!"
 let n = str.replace("Microsoft", "my bussy")
 console.log(n)

 //By default, it is **case sensitive**. However, by using a regular expression using an /i flag (insensitive), it can be made case-insensitive 
 n = str.replace("MICROSOFT", "my bussy")
 console.log(n)

 n = str.replace(/MICROSOFT/i, "my bussy")
 console.log(n)

 //Replace all matches by using /g flag (global)
 str = "Please visit Microsoft, Microsoft and Microsoft!"
 n = str.replace(/MICROSOFT/g, "my bussy")
 console.log(n)

 //--------------------------------------------------------------------------------------------------------------------------------------------------------------//

 //*Convert string to uppercase and lowercase -- toUpperCase(), toLowerCase()
 let text = "La Hee";
 console.log(text.toUpperCase());
 console.log(text.toLowerCase());

 //*Concatenation -- concat()
 let txt1 = 'La';
 let txt2 = 'Hee';
 let txt3 = txt1.concat(" Friggin ", txt2);
 console.log(txt3);

 //* String trimming to remove unneccessary whitespace -- trim() 
 str = "       Hello World!        ";
 console.log(str.trim())

 //*String Padding -- padStart(targetLength, padString), padEnd(targetLength, padString)
 str = "O";
 str = str.padEnd(3, "wO")
 console.log(str)

 //*Extracting String Characters -- charAt(position), charCodeAt(position), []
 //charAt() returns character at specified index
 str = "La Heeeeeeeee";
 console.log(str.charAt(0));

 //charCodeAt() returns unicode of the character
 console.log(str.charCodeAt(0))

 //Alternatively just grab using []
 console.log(str[0])

 //! If no character found, [] returned `undefined`, charAt() returns an empty string. 
 //! str[0] = "A" does not work. It is READ only!!!