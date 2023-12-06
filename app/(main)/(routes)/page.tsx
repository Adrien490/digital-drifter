import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { SearchForm } from "../_components/search-form";
import { Label } from "@/components/ui/label";
import Project from "../_components/project";

export default function Home() {
	return (
		<div className="px-2 flex flex-col">
			<div className="h-[80px] flex justify-between items-center">
				<h2 className="uppercase text-xl">Dashboard</h2>
				<div className="w-2/5">
					<SearchForm />
				</div>
				<Button>
					<PlusCircle size={15} className="mr-2" />
					New project
				</Button>
			</div>
			<div className="py-4 bg-muted rounded-lg px-4">
				<Tabs defaultValue="projects" className="w-[400px]">
					<TabsList className="grid w-full grid-cols-2">
						<TabsTrigger value="projects">Projets</TabsTrigger>
						<TabsTrigger value="password">Password</TabsTrigger>
					</TabsList>
					<TabsContent value="projects">
						<Card>
							<CardHeader>
								<CardTitle>Projets</CardTitle>
								<CardDescription>
									
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-2">
                <Project />
              </CardContent>
							<CardFooter>
							</CardFooter>
						</Card>
					</TabsContent>
					<TabsContent value="password">
						<Card>
							<CardHeader>
								<CardTitle>Password</CardTitle>
								<CardDescription>
									Change your password here. After saving, you'll be logged out.
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-2"></CardContent>
							<CardFooter>
								<Button>Save password</Button>
							</CardFooter>
						</Card>
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
