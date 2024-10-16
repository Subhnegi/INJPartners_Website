import { NextResponse } from "next/server";
import { db } from "@/dbConfig/dbConfig";
import { Testimonial } from "@/models/testimonial.model";
export async function GET() {
	await db();
	try {
		const testimonials = await Testimonial.find({});
		return NextResponse.json(testimonials);
	} catch (error) {
		return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 });
	}

}

// File: pages/api/testimonials/index.js
// import dbConnect from '../../../lib/dbConnect';
// import Testimonial from '../../../models/Testimonial';

// export default async function handler(req, res) {
//   const { method } = req;

//   await dbConnect();

//   switch (method) {
//     case 'GET':
//       try {
//         const testimonials = await Testimonial.find({});
//         res.status(200).json({ success: true, data: testimonials });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;
//     case 'POST':
//       try {
//         const testimonial = await Testimonial.create(req.body);
//         res.status(201).json({ success: true, data: testimonial });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;
//     default:
//       res.status(400).json({ success: false });
//       break;
//   }
// }

// // File: pages/api/testimonials/[id].js
// import dbConnect from '../../../lib/dbConnect';
// import Testimonial from '../../../models/Testimonial';

// export default async function handler(req, res) {
//   const {
//     query: { id },
//     method,
//   } = req;

//   await dbConnect();

//   switch (method) {
//     case 'GET':
//       try {
//         const testimonial = await Testimonial.findOne({ id: id });
//         if (!testimonial) {
//           return res.status(404).json({ success: false });
//         }
//         res.status(200).json({ success: true, data: testimonial });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;

//     case 'PUT':
//       try {
//         const testimonial = await Testimonial.findOneAndUpdate({ id: id }, req.body, {
//           new: true,
//           runValidators: true,
//         });
//         if (!testimonial) {
//           return res.status(404).json({ success: false });
//         }
//         res.status(200).json({ success: true, data: testimonial });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;

//     case 'DELETE':
//       try {
//         const deletedTestimonial = await Testimonial.deleteOne({ id: id });
//         if (!deletedTestimonial) {
//           return res.status(404).json({ success: false });
//         }
//         res.status(200).json({ success: true, data: {} });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;

//     default:
//       res.status(400).json({ success: false });
//       break;
//   }
// }

// [
// 	{
// 		id: "1",
// 		name: "Sarah Johnson",
// 		role: "CEO, TechInnovate",
// 		testimonial:
// 			"InsightPulse's market analysis was instrumental in our successful product launch. Their insights helped us identify key market opportunities we hadn't considered.",
// 	},
// 	{
// 		id: "2",
// 		name: "Michael Chen",
// 		role: "Marketing Director, GreenLife",
// 		testimonial:
// 			"The depth of consumer behavior analysis provided by InsightPulse transformed our marketing strategy. We've seen a 40% increase in customer engagement since implementing their recommendations.",
// 	},
// 	{
// 		id: "3",
// 		name: "Emily Rodriguez",
// 		role: "Strategy Lead, FutureFinance",
// 		testimonial:
// 			"Working with InsightPulse has been a game-changer for our business. Their trend forecasting capabilities have helped us stay ahead of the curve in a rapidly evolving industry.",
// 	},
