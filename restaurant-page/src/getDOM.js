export const getDOM = function() {

    const createDiv = (attribute, attributename) => {
        let div = document.createElement("div")
        div.setAttribute(attribute, attributename)
        return div
    }

    //takes an array of attribute names, type of attribute (e.g., id, class) and appends to given parent node
    const addChildren = (arr, attribute, par) => {
        for (const i of arr) {
            let j = createDiv(attribute, i)
            par.appendChild(j)
        }
    }

    const addText = (node, str) => {
        let span = document.createElement("span");
        span.textContent = str
        node.appendChild(span)
    }

    const clearText = (node) => {
        let str = ""
        node.textContent = ""
    }

    const loremIpsum = () => {
        let i = "Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a paid killer in the human system. Then he’d taken a long and pointless walk along the port’s security perimeter, watching the gulls turn circles beyond the chain link. That was Wintermute, manipulating the lock the way it had manipulated the drone micro and the dripping chassis of a junked console. Now this quiet courtyard, Sunday afternoon, this girl with a ritual lack of urgency through the center of his closed left eyelid. Case had never seen him wear the same suit twice, although his wardrobe seemed to consist entirely of meticulous reconstruction’s of garments of the bright void beyond the chain link. She peered at the rear of the arcade showed him broken lengths of damp chipboard and the dripping chassis of a gutted game console. The alarm still oscillated, louder here, the rear wall dulling the roar of the previous century. Light from a service hatch at the rear of the Villa bespeak a turning in, a denial of the bright void beyond the hull. All the speed he took, all the turns he’d taken and the robot gardener."
        let j = "Our functionality is unparalleled, but our granular integrated, value-added convergence and easy configuration is usually considered a remarkable achievement. We understand that it is better to extend iteravely than to engineer virtually than to strategize macro-intuitively. Without efficient, transparent bloatware, you will lack social networks. We think that most viral web-based applications use far too much Python, and not enough Java. What do we incubate? Anything and everything, regardless of humbleness! What does the buzzword 'technologies' really mean? Think granular. Do you have a plan to become cross-media? We think that most efficient web-based applications use far too much XSL, and not enough Java. We think that most co-branded splash pages use far too much Rails, and not enough Java. We will revalue our aptitude to incubate without reducing our capability to upgrade. A company that can streamline elegantly will (at some undefined point of time in the future) be able to engineer easily. Clicking on this link which refers to B2B Marketing awards shortlist will take you to the ability to whiteboard without lessening our power to benchmark. It may seem marvelous, but it's 100% realistic! What does the buzzword 'technologies' really mean? Think virally-distributed. If all of this sounds astonishing to you, that's because it is! What does the commonly-accepted commonly-accepted standard industry term 'back-end'."
        let k = "We the People of the United States, reserving to the States respectively, the Appointment of such Persons as any of the States so ratifying the Same. Which List they shall sign and certify, and transmit sealed to the Contrary notwithstanding. To borrow money on the credit of the State from which he shall have been elected, and he shall have one Vote. No State shall enter into any Agreement or Compact with another State, shall on demand of the executive Departments, upon any subject relating to the Duties of their respective Offices, and he shall have been presented to him, the Same shall take the following Oath or Affirmation: —“I do solemnly swear or affirm that I will faithfully execute the Office of President of the Vice President, or when he shall exercise the Office of Trust or Profit under the United States, and with the Concurrence of the Senate shall, in the Presence of the States concerned as well as of the Congress. The Judges, both of the United States, except in Cases of Rebellion or Invasion the public Safety may require it. Note: Superseded by the United States: And no Person shall be convicted of Treason shall work Corruption of Blood, or Forfeiture except during the Session of Congress, shall, without the Concurrence of two thirds of the State Legislature."
        let l = "Ich höre schon des Dorfs Getümmel, Hier ist des Volkes wahrer Himmel, Zufrieden jauchzet groß und klein, Hier bin ich nicht; doch viel ist mir bewusst. Es irrt der Mensch, wenn er gut gezogen, Wird selbst ein weiser Mann gewogen. Ich bin Ein Teil von jener Kraft, Die stets das Gute schafft. Hier ist des Volkes wahrer Himmel, Zufrieden jauchzet groß und klein, Hier bin ich nicht; doch viel ist mir bewusst. Ich bin von je der Ordnung Freund gewesen. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens goldner Baum. So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächt'ger Schnelle Vom Himmel durch die Welt zur Hölle! So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächtger Schnelle Vom Himmel durch die Welt zur Hölle. Vernunft fängt wieder an zu sprechen Und Hoffnung wieder an zu sprechen Und Hoffnung wieder an zu blühn; Man sehnt sich nach des Lebens Quelle hin. Es irrt der Mensch, wenn er sie beim Kragen hätte. So schreitet in dem engen Bretterhaus (Theater, Bühne) Den ganzen Kreis der Schöpfung aus, Und wandelt mit bedächt'ger Schnelle Vom Himmel durch die Welt zur Hölle!"
        let m = "For God knows that when you eat of it you shall die. The earth was a formless void and darkness covered the face of the deep, while a wind from God swept over the fish of the sea, and over every creeping thing that moves upon the earth. I will greatly increase your pangs in childbearing; in pain you shall eat bread until you return to the ground, and breathed into his nostrils the breath of life; and the man there was morning, the sixth day. So when the woman saw that the tree of which I commanded you not to eat? But of the tree that is pleasant to the sight and good for food, the tree about which I commanded you, 'You shall not eat, for in the seas, and let birds multiply on the earth. And the LORD God caused a deep sleep to fall upon the face of the deep, while a wind from God swept over the night, and to separate the light was good; and God separated the light from the darkness. To rule the day and the man and put him in the seas, and let birds fly above the earth and subdue it; and have dominion over the birds of the air and over all the days of your life."

        return [i,j,k,l,m]
    }

    return {createDiv, addChildren, clearText, addText, loremIpsum}
}