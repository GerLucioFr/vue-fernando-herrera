describe('Example test', () => {
  it('Should be greather than 10', () => {
    // Arrange
    let value = 5;

    // Act
    value += 8;

    expect(value).toBeGreaterThan(10);
  });
});
