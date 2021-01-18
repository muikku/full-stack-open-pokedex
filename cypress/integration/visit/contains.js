describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.wait(5000)
    cy.visit('http://localhost:5000', { timeout: 10000 })
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})
