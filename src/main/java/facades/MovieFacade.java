package facades;

import entities.Movie;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

/**
 *
 * Rename Class to a relevant name Add add relevant facade methods
 */
public class MovieFacade {

    private static MovieFacade instance;
    private static EntityManagerFactory emf;

    //Private Constructor to ensure Singleton
    private MovieFacade() {
    }

    /**
     *
     * @param _emf
     * @return an instance of this facade class.
     */
    public static MovieFacade getFacadeExample(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new MovieFacade();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    //TODO Remove/Change this before use
    public long getMovieCount() {
        EntityManager em = emf.createEntityManager();
        try {
            long movieCount = (long) em.createQuery("SELECT COUNT(r) FROM Movie r").getSingleResult();
            return movieCount;
        } finally {
            em.close();
        }

    }

    public List<Movie> getMovieByName(String name) {
        EntityManager em = emf.createEntityManager();
        try {
            TypedQuery<Movie> query = em.createQuery("SELECT m from Movie m WHERE m.name like :name", Movie.class);
            query.setParameter("name", name);
            List<Movie> movies = query.getResultList();
            if(!movies.isEmpty()){
                return movies;
            }else{
                String[] dummyArray = new String[0];
                Movie movie = new Movie(0000,"Movie Doesn't exist",dummyArray);
                movies.add(movie);
                return movies;
            }

        } finally {
            em.close();
        }

    }

    public Movie getMovieByID(int id) {
        EntityManager em = emf.createEntityManager();
        try {
            Movie movie = em.find(Movie.class, (long) id);
            return movie;
        } finally {
            em.close();
        }
    }

    public Movie addMovie(int year, String name, String[] actors) {
        Movie movie = new Movie(year, name, actors);
        EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(movie);
            em.getTransaction().commit();
            return movie;
        } finally {
            em.close();
        }
    }

    public void addMovies(List<Movie> movies) {
        for (Movie movie : movies) {
            addMovie(movie.getYear(), movie.getName(), movie.getActors());
        }

    }

    public List<Movie> getAllMovies() {
        EntityManager em = getEntityManager();
        TypedQuery q = em.createQuery("SELECT m FROM Movie M", Movie.class);
        List<Movie> resultList = q.getResultList();
        for (Movie movie : resultList) {
            resultList.add(movie);
        }
        return resultList;
    }

}
