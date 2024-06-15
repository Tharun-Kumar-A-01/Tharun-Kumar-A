import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function PostCard(post) {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="Project"
          height={40}
          radius="sm"
          src="/next.svg"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{post.title}</p>
          <p className="text-small text-default">{post.url}</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
        <p>{post.desc}</p>
        <ul className="flex flex-row w-full sm:w-1/2 justify-evenly">
          <li>Tai</li>
          <li>Nex</li>
          <li>Rea</li>
        </ul>
      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
}
