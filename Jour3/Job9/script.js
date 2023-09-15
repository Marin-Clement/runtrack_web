try {
    const numerator = 10;
    const denominator = 0;
    const result = numerator / denominator;

    console.log(`Le résultat de la division est : ${result}`);
} catch (error) {
    console.error(`Une erreur s'est produite : ${error.message}`);
}
