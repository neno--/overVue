new Vue({
    el: '#app',
    data: {
        started: false,
        hero: 100,
        monster: 100,
        heroDamage: 20,
        heroHeal: 30,
        monsterDamage: 20,
        monsterSpecialDamage: 40,
        battleLog: []

    },
    methods: {
        reset: function () {
            this.started = false
            this.hero = 100
            this.monster = 100
        },
        attack: function () {
            var monsterDamage = Math.floor(Math.random() * (this.monsterDamage + 1))
            this.monster -= monsterDamage
            this.battleLog.push({log: "PLAYER HITS MONSTER FOR " + monsterDamage, type: 'H'})
            this.monsterTurn()
            this.checkScore()
        },
        specialAttack: function () {
            var monsterSpecialDamage = Math.floor(Math.random() * (this.monsterSpecialDamage + 1))
            this.monster -= monsterSpecialDamage
            this.battleLog.push({log: "PLAYER HITS MONSTER FOR " + monsterSpecialDamage, type: 'H'})
            this.monsterTurn()
            this.checkScore()
        },
        heal: function () {
            var heal = Math.floor(Math.random() * (this.heroHeal + 1))
            this.hero += heal
            this.battleLog.push({log: "PLAYER HEALS FOR " + heal, type: 'M'})
            this.monsterTurn()
            this.checkScore()
        },
        checkScore: function () {
            var message
            if (this.monster < 0) {
                message = "You win! New Game?"
            } else if (this.hero < 0) {
                message = "You loose! New Game?"
            }

            if (!message) {
                return
            }

            if (confirm(message)) {
                this.reset()
            } else {

            }
        },
        monsterTurn: function () {
            var heroDamage = Math.floor(Math.random() * (this.heroDamage + 1))
            this.hero -= heroDamage
            this.battleLog.push({log: "MONSTER HITS PLAYER FOR " + heroDamage, type: 'M'})
        }
    }
})
