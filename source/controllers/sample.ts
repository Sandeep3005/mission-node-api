import { NextFunction, Request, Response } from "express";
import { getFromCollection } from "../config/db-config";

const serverHealthCheck = (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: "pong",
  });
};

const getCollectionRef = async (collection: string) => {
  const db = getFromCollection();
  const collectionRef = await db.collection(collection).get();
  var movies: any = [];
  collectionRef.docs.forEach((x) => {
    movies.push(x.data());
  });
  return movies;
};

const getSingleDocRef = async (id: any, collection: string) => {
  console.log("id", id);
  const db = getFromCollection();
  const x = await db.collection(collection).doc(id).get();
  return x;
};

const getAllMovies = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const movies = await getCollectionRef("movies");
  return res.status(200).json({ movies });
};

const getMovieById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { id } = req.params;
  let movie: any = {};

  getSingleDocRef(id, "movies").then((ref: any) => {
    movie = ref.data();
    return res.status(200).json({ movie });
  });
};

const getAllCastMembers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const castMembers = await getCollectionRef("castMember");
  return res.status(200).json({ castMembers });
};

const getCastMemberByName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let { name } = req.params;
  const castMembers: any = await getCollectionRef("castMember");
  const castMember = castMembers.filter((cast: any) => cast.name === name);
  return res.status(200).json({ castMember });
};

const getRandomTeam = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { size } = req.params;
  const castMembers: any = await getCollectionRef("castMember");
  console.log("castMembers", castMembers);
  let team = castMembers.filter((cast: any) => cast.isGoodPerson === true);
  team = team.sort(() => Math.random() - Math.random()).slice(0, size);
  console.log("team", team);
  return res.status(200).json({ team });
};

export default {
  serverHealthCheck,
  getAllMovies,
  getMovieById,
  getAllCastMembers,
  getCastMemberByName,
  getRandomTeam,
};
