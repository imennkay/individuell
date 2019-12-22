const meny = document.getElementById("plusminus")

            const addaknapp = document.querySelector("#knapp");
            addaknapp.addEventListener("click", additemToList);

            function additemToList(){


               const item= document.querySelector("#item").value;
               const value= document.querySelector("#value").value;
               const totaltInkomstSpan = document.querySelector(".totaltinkomst")
               const totaltInkomstInteger = totaltInkomstSpan.textContent
               const totaltKostnadSpan = document.querySelector(".totaltkostnad")
               const totaltKostnadInteger = totaltKostnadSpan.textContent

               const vinst = document.querySelector(".totaltvinst")

               const totaltinkomst = Number(totaltInkomstInteger)
               const totaltkostnad = Number(totaltKostnadInteger)
               const valueNumber = Number(value)


               const itemP = document.createElement("p")
               const itemInnehal = document.createTextNode(item +": " +value)
               itemP.appendChild(itemInnehal)

                if (meny.selectedIndex == 0){
                    const inkomstCount = totaltinkomst + valueNumber
                    totaltInkomstSpan.textContent = inkomstCount
                    

                const itemDiv = document.querySelector(".inkomst")
                itemDiv.appendChild(itemP)

                CountVinst()



                } else if (meny.selectedIndex == 1){

                    const kostnadCount = totaltkostnad + valueNumber
                    totaltKostnadSpan.textContent= kostnadCount
                    

                const itemDiv = document.querySelector(".kostnad")
                itemDiv.appendChild(itemP)

                CountVinst()
                
                }

                
            }

            function CountVinst(){
                
                
               const totaltInkomstSpan = document.querySelector(".totaltinkomst")
               const totaltInkomstInteger = totaltInkomstSpan.textContent
               const totaltKostnadSpan = document.querySelector(".totaltkostnad")
               const totalKostnadInteger = totaltKostnadSpan.textContent

               const vinst = document.querySelector(".totaltvinst")

               const totaltinkomst = Number(totaltInkomstInteger)
               const totaltkostnad = Number(totalKostnadInteger)



                const vinstCount = totaltinkomst - totaltkostnad
                vinst.textContent = vinstCount
            }