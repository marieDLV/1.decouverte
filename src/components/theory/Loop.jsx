/**
 * Le rendu en iterant sur une collection de valeurs
 */
function Loop() {
  // La props "key" est spéciale en React, elle permet d'identifier de manière unique un élément
  // Elle est recommandée pour l'optimissation du rendu.
    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    );
  }

  const users = [
    {
        "id": 1,
        "name": "AMARI OUSSAMA",
        "email":"oussama.amari@inetum.com"
    },
    {
        "id": 2,
        "name": "ANDRIEU QUENTIN",
        "email":"quentin.andrieu@inetum.com"
    },
    {
        "id": 3,
        "name": "BEN AMEUR RAMI",
        "email":"rami.ben-ameur@inetum.com"
    },
    {
        "id": 4,
        "name": "BOUREAU ROMAIN",
        "email":"romain.boureau@inetum.com"
    },
    {
        "id": 5,
        "name": "CORION JULIEN",
        "email":"julien.corion@inetum.com"
    },
    {
        "id": 6,
        "name": "DELALLEAU LAURENT",
        "email":"laurent.delalleau@inetum.com"
    },
    {
        "id": 7,
        "name": "DELAVALETTE MARIE",
        "email":"marie.delavalette@inetum.com"
    },
    {
        "id": 8,
        "name": "DUHAMEL SEBASTIEN",
        "email":"sebastien.duhamel@inetum.com"
    },
    {
        "id": 9,
        "name": "FRANCOIS REMY",
        "email":"remy.francois@inetum.com"
    },
    {
        "id": 10,
        "name": "ROSSIGNOL LAURENT",
        "email":"laurent.rossignol@inetum.com"
    },
    {
        "id": 11,
        "name": "SAMY SOUFIANE",
        "email":"soufiane.samy@inetum.com"
    },
    {
        "id": 12,
        "name": "THIAM ELHADJI YACOUBA",
        "email":"elhadji-yacouba.thiam@inetum.com"
    }
];
  
  export default Loop;